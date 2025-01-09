import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Popper from "@mui/material/Popper";

interface EmailOption {
  label: string;
}

interface EmailAutocompleteProps {
  onEmailsChange: (emails: string[]) => void;
  emailOptions: string[];
  name?: string;
}

const EmailAutocomplete: React.FC<EmailAutocompleteProps> = ({
  onEmailsChange,
  emailOptions,
  name,
}) => {
  const [emails, setEmails] = useState<EmailOption[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState<EmailOption[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const formattedOptions = emailOptions.map((email) => ({ label: email }));
    setDynamicOptions(formattedOptions);

    setEmails(formattedOptions);
    onEmailsChange(formattedOptions.map((option) => option.label));
  }, [emailOptions]);

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const addEmail = (email: string) => {
    if (email && isValidEmail(email)) {
      const newEmail = { label: email };
      if (!emails.some((e) => e.label === email)) {
        setEmails((prev) => {
          const updatedEmails = [...prev, newEmail];
          onEmailsChange(updatedEmails.map((email) => email.label));
          return updatedEmails;
        });
      }
    }
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addEmail(inputValue);
    }
  };

  const handleBlur = () => {
    if (inputValue) {
      addEmail(inputValue);
    }
  };

  const handleDelete = (emailToDelete: string) => {
    setEmails((prev) => {
      const updatedEmails = prev.filter((email) => email.label !== emailToDelete);
      onEmailsChange(updatedEmails.map((email) => email.label));
      return updatedEmails;
    });
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      disablePortal
      options={dynamicOptions}
      value={emails}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, value, reason) => {
        if (reason === "selectOption") {
          const selectedOption = value[value.length - 1] as EmailOption;
          addEmail(selectedOption.label);
        }
      }}
      PopperComponent={(props) => (
        <Popper
          {...props}
          style={{ zIndex: 1500, width: '91%' }}
        />
      )}
      renderTags={(value: EmailOption[], getTagProps) =>
        value.map((option: EmailOption, index: number) => (
          <Chip
            variant="outlined"
            label={option.label}
            {...getTagProps({ index })}
            onDelete={() => handleDelete(option.label)}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          variant="outlined"
          label="Email Addresses"
          placeholder="Type or select email"
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      )}
    />
  );
};

export default EmailAutocomplete;
