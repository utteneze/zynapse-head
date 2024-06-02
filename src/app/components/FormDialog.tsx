"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export enum ButtonType {
  Link = "link",
  Default = "default",
  Destructive = "destructive",
  Outline = "outline",
  Secondary = "secondary",
  Ghost = "ghost",
}

type Prop = {
  buttonType: ButtonType;
  buttonText: string;
  RenderForm: React.FC<any>;
};

export default function FormDialog({
  buttonType,
  buttonText,
  RenderForm,
}: Prop) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonType}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent>
        <RenderForm />
      </DialogContent>
    </Dialog>
  );
}
