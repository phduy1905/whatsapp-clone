import { useCollection } from "react-firebase-hooks/firestore";
import { collection, where } from "firebase/firestore";
import { query } from "firebase/firestore";
import { getRecipientEmail } from "./../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { AppUser, Conversation } from "./../types/index";

export const useRecipient = (conversationUsers: Conversation["users"]) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);

  //   Get recipient email
  const recipientEmail = getRecipientEmail(conversationUsers, loggedInUser);

  // Get recipient avatar
  const queryGetRecipient = query(
    collection(db, "users"),
    where("email", "==", recipientEmail)
  );

  const [recipientsSnapshot] = useCollection(queryGetRecipient);

  //   recipientSnapshot
  const recipient = recipientsSnapshot?.docs[0]?.data() as AppUser | undefined;

  return { recipientEmail, recipient };
};
