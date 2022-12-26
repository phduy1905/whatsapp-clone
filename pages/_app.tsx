import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Login from './login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading, _error] = useAuthState(auth);
  
  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(doc(db, 'users', user?.email as string), {
          email: user?.email,
          lastSeen: serverTimestamp(),
          photoUrl: user?.photoURL
        }, {
          merge: true
        })
      } catch (error) {
        console.log('setUserInDbError', error);
      }
    };

    if (user) {
      setUserInDb();
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login/>;

  return <Component {...pageProps} />
}
