import { FormEvent, useRef } from "react";
import Card from "../ui/Card";
import styled from "styled-components";

interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

interface NewMeetupFormProps {
  onAddMeetup: (meetupData: MeetupData) => void;
}

const NewMeetupForm = ({ onAddMeetup }: NewMeetupFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: FormEvent): void {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value ?? "";
    const enteredImage = imageInputRef.current?.value ?? "";
    const enteredAddress = addressInputRef.current?.value ?? "";
    const enteredDescription = descriptionInputRef.current?.value ?? "";

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </Control>
        <Control>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </Control>
        <Control>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </Control>
        <Control>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </Control>
        <Actions>
          <button>Add Meetup</button>
        </Actions>
      </Form>
    </Card>
  );
};

export default NewMeetupForm;

const Form = styled.form`
  padding: 1rem;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  & input,
  & textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #007749;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #007749;
    border-radius: 4px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #0ea552;
      border-color: #0ea552;
    }
  }
`;
