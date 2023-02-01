import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

interface EnteredMeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
};

function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData: EnteredMeetupData) => {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
