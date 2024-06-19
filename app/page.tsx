import Image from "next/image";
import { logout } from "./logout/actions";

export default function Home() {
  return (
    <div>


      <form action={logout}>
        <button type="submit">
          Logout
        </button>
      </form>
    </div>


  );
}
