import { useEffect, useRef } from "react";
import { Dialog, DialogContent } from "components/molecules/Dialog/dialog";
import { useMediaQuery } from "lib/hooks/useMediaQuery";
import { Drawer } from "components/shared/Drawer";
import { TrackedReposWizard } from "./TrackedRepoWizard/TrackedRepoWizard";

interface TrackedReposModalProps {
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose: () => void;
  onAddToTrackingList: (repos: Map<string, boolean>) => void;
  onCancel: () => void;
}

const TrackedReposModal = ({ isOpen, onClose, onAddToTrackingList, onCancel }: TrackedReposModalProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const contents = (
    <TrackedReposWizard onAddToTrackingList={onAddToTrackingList} onCancel={onCancel} onCloseModal={onClose} />
  );

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      triggerRef.current.click();
    }
  }, [isOpen]);

  if (isSmallScreen) {
    return <Drawer trigger={<button ref={triggerRef} className="hidden"></button>}>{contents}</Drawer>;
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent autoStyle={false} onEscapeKeyDown={onClose}>
        {contents}
      </DialogContent>
    </Dialog>
  );
};

export default TrackedReposModal;
