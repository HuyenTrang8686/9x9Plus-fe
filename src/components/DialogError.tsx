import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Loader2, TriangleAlert } from 'lucide-react';

type Props = {
  title: string;
  des: string;
  isOpen: boolean;
  isLoading?: boolean;
  onClick: () => void;
};
const DialogError = (
  { title, des, isOpen, isLoading, onClick }: Props
) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="fixed top-1/2 left-1/2 -translate-1/2 confirm-dialog gap-3 max-w-[400px] h-[331px] w-full flex flex-col justify-center">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-shadow-custom font-semibold text-2xl">{title}</DialogTitle>
          <TriangleAlert className="size-[100px] text-shadow-custom" />
          <DialogDescription className="text-shadow-custom">
            {des}
          </DialogDescription>
        </DialogHeader>
        <Button className="w-1/2 button-custom" onClick={onClick}>
          {isLoading ? <Loader2 className="animate-spin" /> : 'OK'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogError;
