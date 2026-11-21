"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

const SheetPortal = ({ children }: { children: React.ReactNode }) => (
  <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>
);

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = "right", ...props }, ref) => {
  const sideMap = {
    top: "top-0 left-0 h-full w-full",
    bottom: "bottom-0 left-0 h-full w-full",
    left: "top-0 left-0 h-full w-full",
    right: "top-0 right-0 h-full w-full",
  } as const;

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col max-w-full min-w-0 outline-none",
          sideMap[side],
          className
        )}
        {...props}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ x: side === "right" ? "100%" : side === "left" ? "-100%" : 0, y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: side === "right" ? "100%" : side === "left" ? "-100%" : 0, y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className={cn("flex flex-col h-full w-full min-w-0", className)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = DialogPrimitive.Content.displayName;

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: "top" | "bottom" | "left" | "right";
}

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  SheetHeaderProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
SheetHeader.displayName = "SheetHeader";

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  SheetFooterProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-auto flex flex-col space-y-1.5 p-6 border-t border-border", className)}
    {...props}
  />
));
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  SheetTitleProps
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-secondary-text", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
interface SheetTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface SheetDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
