'use client';

import GoodSign from '@/libs/shared/icons/GoodSign';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
// Minimal USDT ABI for approval
import CoinIcon from '@/libs/shared/icons/Coin';
import { isClient } from '@/libs/utils';
import useBoxStore from '@/store/useBoxStore';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

type Props = {
  boxNumber: number;
  currentBox: number;
  isOpenedBox: boolean;
  address: string;
};

const ConfirmDialog = ({ boxNumber, isOpenedBox, currentBox, address }: Props) => {
  const t = useTranslations('box');
  const tAuth = useTranslations('auth');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loadingItemsStore, setLoadingItemsStore] = useState<boolean>(false);
  const { handleOpenBox, loadingItems, isTriggerLoading } = useBoxStore(
    useShallow(
      state => ({
        loadingItems: state.loadingItems,
        isTriggerLoading: state.isTriggerLoading,
        handleOpenBox: state.handleOpenBox,
        setLoading: state.setLoading,
      })
    ),
  );

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = async (open: boolean) => {
    if ((!isOpenedBox && boxNumber !== 1) && currentBox !== boxNumber) {
      toast.warning(t('needToOpenBox', { boxNumber: currentBox }));
      return;
    } else if (isOpenedBox) {
      router.push(`/box/${boxNumber}`);
      return;
    }
    setIsOpen(open);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
  };

  const handleConfirm = async () => {
    const res = await handleOpenBox(
      boxNumber,
      address,
      {
        installWallet: tAuth('installWallet'),
        connectWallet: tAuth('connectWalletRequired'),
        transactionFailed: t('transactionFailed'),
        openBoxSuccess: t('openBoxSuccess'),
        transactionCanceled: t('transactionFailedOrCanceled')
      }
    );
    res && setIsSuccess(true);
  };

  useEffect(() => {
    if (isClient) {
      const LoadingItem = localStorage.getItem('LoadingItem') ? JSON.parse(localStorage.getItem('LoadingItem')!) : false;
      setLoadingItemsStore(LoadingItem ? LoadingItem[boxNumber] : false);
    }
  }, [boxNumber, isTriggerLoading]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className={`${(boxNumber === 1 || isOpenedBox || currentBox === boxNumber) ? 'button-base' : 'button-base-disabled'} text-white !py-1 font-[700] text-[11px] text-nowrap w-20`}
      >
        { loadingItems[boxNumber] || loadingItemsStore ? <Loader2 className="animate-spin size-4" /> : !isOpenedBox ? t('unlock') : t('details')}
      </DialogTrigger>
      <DialogContent className="confirm-dialog gap-3 min-h-[360px]">
        <DialogHeader>
          <DialogTitle className="text-shadow-custom text-[1.5rem] font-[700] mb-0">
            {!isSuccess && t('confirmPayment')}
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {!isSuccess ? (
          // </div>
          <div className="-translate-y-3 flex flex-col items-center">
            <CoinIcon />
            <p className="text-shadow-custom text-[1.5rem] font-[860] text-center">26$ USDT</p>
            <p className="text-yellow-200 text-xs text-center mt-1">{t('doNotExitWarning')}</p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center -translate-y-3">
            <GoodSign />
            <p className="text-shadow-custom font-[700] text-[1.125rem]">{t('openBoxSuccess')}</p>
            <p className="text-shadow-custom text-[0.875rem] font-[400] text-center">
              {t('openBoxSuccessMessage', { boxNumber })}
            </p>
          </div>
        )}

        <div className="space-x-3 px-3 flex w-full -translate-y-3">
          <Button
            variant="outline"
            className={`bg-transparent text-white w-1/2 ${loadingItems[boxNumber] || loadingItemsStore ? 'hidden' : 'flex-1'} transition-all`}
            onClick={handleCancel}
          >
            {t('goBack')}
          </Button>
          <Button
            className={`${loadingItems[boxNumber] || loadingItemsStore ? 'flex-grow' : 'flex-1'}  button-custom`}
            onClick={() => {
              !isSuccess ? handleConfirm() : router.push(`box/${boxNumber}`);
            }}
            disabled={loadingItems[boxNumber] || loadingItemsStore}
          >
            { loadingItems[boxNumber] || loadingItemsStore ? t('processing') : isSuccess ? t('details') : t('confirm')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
