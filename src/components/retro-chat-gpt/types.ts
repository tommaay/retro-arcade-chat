export interface Message {
  role: "user" | "system";
  content: string;
  image?: string;
}