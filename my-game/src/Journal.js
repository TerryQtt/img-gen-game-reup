import { getDatabase, ref, push, set } from "firebase/database";
import { db } from "./firebase";

export function StartJournal() {
  const journalListRef = ref(db, "entries");
  const newEntryRef = push(journalListRef);
  set(newEntryRef, {});
}
