import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";

interface EnteredMeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

interface ResponseResult {
  message: string;
}

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (
    enteredMeetupData: EnteredMeetupData
  ): Promise<string> => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result: ResponseResult = await response.json();

    if (response.status === 201) {
      router.push("/");
    }

    return result.message;
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
