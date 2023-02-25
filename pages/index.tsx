import { Chat } from "../components/Chat";

function Home() {
  return (
    <div className="flex flex-co">
      <section className="w-full">
        <div className="text-2xl font-extrabold">OpenAI GPT-3</div>
        <div className=" items-center">
          <img
            className="mx-auto rounded-full w-[100px] h-[100px] mt-[50px]"
            src="https://cdn.vox-cdn.com/thumbor/VUn58Srehbu5brDicV6QgNp8SM0=/0x0:1820x1213/1400x1400/filters:focal(910x607:911x608)/cdn.vox-cdn.com/uploads/chorus_asset/file/24247717/lp_logo_3.0.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="absolute inset-x-0 bottom-[20px]">
        <div>Noah-GptBot:</div>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </div>
  );
}

export default Home;
