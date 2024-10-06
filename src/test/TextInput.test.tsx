import userEvent from "@testing-library/user-event";
import TextInput from "@/components/TextInput";
import { render, screen } from "@testing-library/react";

test("TextInput", async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const textElement = screen.getByText("Your Text:");
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText("Text Input");
  await user.type(inputElement, "Hello, World!");
  expect(screen.getByText("Your Text: Hello, World!")).toHaveTextContent(
    "Hello, World!",
  );
});
