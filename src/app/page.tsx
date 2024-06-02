"use client";
import RegisterForm from "./components/RegisterForm";
import FeatureList from "./components/FeatureList";
import LoginForm from "./components/LoginForm";
import FormDialog, { ButtonType } from "./components/FormDialog";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-start p-10 bg-gray-900 gap-x-10">
      <div className=" text-white py-20 flex-grow">
        <div className="container mx-auto text-center space-y-20">
          <div>
            <h1 className="text-8xl font-bold">Zynapse</h1>
            <p className="text-3xl mt-4">Think Outside Your Skull</p>
          </div>
          <div className="">
            <FormDialog
              buttonType={ButtonType.Secondary}
              buttonText="Get Started"
              RenderForm={RegisterForm}
            />
            <FormDialog
              buttonType={ButtonType.Default}
              buttonText="Login"
              RenderForm={LoginForm}
            />
          </div>
          <FeatureList />
        </div>
      </div>
    </main>
  );
}
