import { useAppSelector } from '@/services/store/hooks';

export const ContactPage = () => {
  const counter = useAppSelector((state) => state.counter.counter);

  return (
    <div>
      <span>El contador es: {counter}</span>
    </div>
  );
};
