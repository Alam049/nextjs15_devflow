import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/routes"
import Link from "next/link"


const Home = async () => {
   
    
   return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
      <h1 className="h1-bold">All Question</h1>  

      <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
        <Link 
        href={ROUTES.ASK_QUESTION}
        >
        Ask a Question
        </Link>
      </Button>
      </section>
      <section className="mt-11">
        LocalSearch  
      </section> 
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question Card 1</p>
        <p>Question Card 2</p>
        <p>Question Card 3</p>
        <p>Question Card 4</p>
        <p>Question Card 5</p>
      </div>
    </>
   )
}

export default Home
