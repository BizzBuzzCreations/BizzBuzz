import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Every public page reads its text/images/videos from the dashboard's
// database content. Pages are cached (ISR) so visitors get a fast response
// instead of a DB hit on every request. Dashboard saves call
// revalidatePath("/", "layout"), so edits still show up right away; the
// 60s revalidate is just a safety net.
export const revalidate = 60;

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
