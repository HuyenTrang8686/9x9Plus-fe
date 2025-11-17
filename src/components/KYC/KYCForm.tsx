'use client';
import { ApiException } from '@/app/http/apiRequest';
import userRequest from '@/app/http/requests/user';
import type { KYCFormData } from '@/app/schema/kyc';
import { KYCSchema } from '@/app/schema/kyc';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'nextjs-toploader/app';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const KYCForm = () => {
  const t = useTranslations('kyc');
  const form = useForm<KYCFormData>({
    resolver: zodResolver(KYCSchema),
    defaultValues: {
      email: '',
    },
  });
  const router = useRouter();
  //

  const onSubmit = async (data: KYCFormData) => {
    try {
      const response = await userRequest.userKyc(data);
      toast.success(response?.message || t('kycRequestSuccess'));
      router.push(`/verify-email?name=${encodeURIComponent(data.email)}`);
    } catch (err: unknown) {
      if (err instanceof ApiException) {
        toast.error(err.message);
      } else {
        toast.error(t('kycRequestError'));
      }
    }
    form.reset();
  };

  return (
    <div className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-white">
                  {t('email')}
                </FormLabel>
                <FormControl>
                  <Input className="input-kyc" placeholder={t('emailPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full button-base" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('submitting')}
              </>
            ) : (
              t('submit')
            )}
          </Button>
        </form>
      </Form>
    </div>

  );
};

export default KYCForm;
