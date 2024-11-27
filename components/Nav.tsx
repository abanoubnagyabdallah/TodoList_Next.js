import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
    return (
        <>
            <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
                <h1><ModeToggle /></h1>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </header>
        </>
    )
}
