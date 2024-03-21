import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "components/atoms/Button/button";
import { Dialog } from "./Dialog";

type Story = StoryObj<typeof Dialog>;

const defaultArgs: Story["args"] = {
  title: "Welcome to the dialog",
  description: "The dialog is a wonderful place to store things",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec mauris at risus volutpat consequat ut a neque.
      Quisque laoreet ut urna sed semper. Integer pharetra augue magna, quis maximus augue mollis dignissim. Vivamus
      vestibulum lectus vitae purus aliquet, eget consequat lorem posuere. Nullam quis massa a enim efficitur facilisis.
      Etiam aliquam felis eu ligula accumsan suscipit. Integer nulla ligula, gravida vel sagittis ut, blandit sed eros.
    </p>
  ),
};

const meta: Meta<typeof Dialog> = {
  title: "Components/Shared/Dialog",
  component: Dialog,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      const onOpenChange = (open: boolean) => {
        setOpen(open);
      };

      return (
        <div className="flex items-center justify-center h-screen">
          <Button
            variant="primary"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Open
          </Button>
          <Story args={{ ...defaultArgs, open, onOpenChange }} />
        </div>
      );
    },
  ],
};

export default meta;

export const Default: Story = {};
