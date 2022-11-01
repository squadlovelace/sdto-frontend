export interface InputProps {
  textLabel: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ItemInputProps extends InputProps {
  type: string;
  name?: string;
}
