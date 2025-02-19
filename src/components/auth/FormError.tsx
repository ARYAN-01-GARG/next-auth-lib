import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
    if (!message) return null;
    return (
        <div className="bg-destructive/15 p-2 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <BsExclamationTriangle className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );
};