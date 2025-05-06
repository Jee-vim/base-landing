import { cn } from "@/lib/utils";
import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ value, className = "", isError, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Expose internal ref to parent via forwarded ref
    useImperativeHandle(ref, () => textareaRef.current!, []);

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [value]);

    return (
      <textarea
        {...props}
        ref={textareaRef}
        value={value}
        rows={1}
        className={cn(
          "w-full h-10 max-h-[15vh] rounded-md border border-neutral-500 bg-input px-3 py-2 text-foreground text-base resize-none custom-scrollbar overflow-y-auto text-sm focus:outline-none",
          className,
          isError && "border-red-500",
        )}
      />
    );
  },
);

Textarea.displayName = "Textarea";
export default Textarea;
