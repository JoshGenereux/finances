import { useModalStore } from "@/store/modal";

export function validate(data: Object) {
  let validated = true;
  // @ts-ignore
  const { amount, name, type } = data;

  if (!amount || amount < 1) validated = false;
  if (!name.trim()) validated = false;
  if (!type) validated = false;

  return validated;
}
