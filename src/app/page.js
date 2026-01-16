import CategoriesPage1 from "./(layouts)/categories/page";
// import MainPage1 from "./(layouts)/welcome/page1";


export default function Home() {
  return (
    <div className={`home-page-js flex flex-col gap-5 w-full`}>
      <CategoriesPage1/>
    </div>
  );
}