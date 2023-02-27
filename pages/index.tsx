import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">OpenAI GPT-3</Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Noah-GPT-bot</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

export default Home;
