import { Container } from '@/components/Container';
import ChatAnimation from '@/components/ChatAnimation';

export function ChatSection() {
  return (
    <section
      id="chat"
      className="relative overflow-hidden bg-gray-100 py-20 sm:py-28"
    >
      <Container>
        <div className="flex justify-center items-center">
          <ChatAnimation />
        </div>
      </Container>
    </section>
  );
}
