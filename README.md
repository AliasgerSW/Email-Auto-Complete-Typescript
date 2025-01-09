# EmailAutocomplete Component

`EmailAutocomplete` is a React component for managing email inputs. It provides users the ability to either type in email addresses manually or select them from a predefined list. The component is built using Material-UI components like `Autocomplete`, `TextField`, and `Chip`.

## Features

- **Dynamic Options**: Provides a list of predefined email options that can be updated dynamically.
- **Email Validation**: Ensures only valid email addresses are added.
- **Keyboard Support**: Allows adding emails using the `Enter` or `Comma` keys.
- **Chip Management**: Displays added emails as chips that can be removed.
- **Customizable Popper**: Ensures dropdown menus are styled and positioned correctly, even inside modal dialogs.
- **Reusable Design**: Flexible to fit multiple use cases with customizable props.

## Installation

```bash
npm install @mui/material @emotion/react @emotion/styled
Add the EmailAutocomplete.tsx file to your project directory.

Props
Prop Name	Type	Description
onEmailsChange	(emails: string[]) => void	Callback invoked whenever the list of emails changes.
emailOptions	string[]	A list of predefined email options.
name	string	Optional name attribute for the input field (useful for forms).
Usage
tsx
Copy code
import React, { useState } from "react";
import EmailAutocomplete from "./EmailAutocomplete";

const App = () => {
  const [emails, setEmails] = useState<string[]>([]);

  const handleEmailsChange = (updatedEmails: string[]) => {
    setEmails(updatedEmails);
    console.log("Current Emails:", updatedEmails);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Email Input</h2>
      <EmailAutocomplete
        emailOptions={["example1@example.com", "example2@example.com"]}
        onEmailsChange={handleEmailsChange}
        name="emailList"
      />
      <p>Selected Emails:</p>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
Notes
Ensure you include Material-UI's styles and dependencies in your project.
Customize the label, placeholder, and other UI properties by editing the TextField and Autocomplete components.
Modify the Popper style to align with your project's requirements.
License
This project is licensed under the MIT License.

LICENSE
text
Copy code
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE