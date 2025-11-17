import { handleRevalidateTag } from '@/app/actions/revalidation';
import userRequest from '@/app/http/requests/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'nextjs-toploader/app';

import { toast } from 'sonner';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['get-me'],
    queryFn: async () => await userRequest.userGetMe(),
    placeholderData: prevData => prevData
  });
};

type UpdateMeOptions = {
  onErrorMessage?: string;
  onSuccessMessage?: string;
};

export const useUpdateMe = (options?: UpdateMeOptions) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (name: string) => await userRequest.userUpdateMe(name),
    onError: () => {
      toast.error(options?.onErrorMessage || 'Update failed!');
    },
    onSuccess: () => {
      toast.success(options?.onSuccessMessage || 'Update successful!');
      handleRevalidateTag('get-me');
      router.refresh();
    },
  });
};
