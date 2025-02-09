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
```

Add the `EmailAutocomplete.tsx` file to your project directory.

## Props

| Prop Name       | Type                 | Description                                                                 |
|------------------|----------------------|-----------------------------------------------------------------------------|
| `onEmailsChange` | `(emails: string[]) => void` | Callback invoked whenever the list of emails changes.                     |
| `emailOptions`   | `string[]`          | A list of predefined email options.                                         |
| `name`           | `string`            | Optional name attribute for the input field (useful for forms).             |

## Usage

```tsx
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
```

## Notes

- Ensure you include Material-UI's styles and dependencies in your project.
- Customize the label, placeholder, and other UI properties by editing the `TextField` and `Autocomplete` components.
- Modify the Popper style to align with your project's requirements.

## License

This project is licensed under the [MIT License](LICENSE).
