export interface ErrorMessageProps {
  messages: string[];
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ messages }) =>
  messages && messages.length > 0 ? (
    <>
      {messages.map((message) => (
        <h5 style={{ color: "red" }}>{message}</h5>
      ))}
    </>
  ) : null;

export default ErrorMessage;
