import {
  Dialog as InternalDialog,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/molecules/Dialog/dialog";

interface DialogProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}
export const Dialog = ({ title, description, children, open, onOpenChange }: DialogProps) => {
  return (
    <InternalDialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogCloseButton onClick={() => onOpenChange(false)} />
      </DialogContent>
    </InternalDialog>
  );
};
