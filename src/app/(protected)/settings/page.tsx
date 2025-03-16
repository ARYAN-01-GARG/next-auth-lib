import { Button } from "@/components/ui/button";
import { auth , signOut } from "../../../../auth";

const SettingPage = async () => {
    const session = await auth();
    return (
        <div className="flex flex-col gap-y-5 w-full h-full items-center justify-center">
            {JSON.stringify(session)}

            <form action={async () => {
                    'use server';

                    await signOut();
                }
            }>
                <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="text-lg font-medium"
                    type="submit"
                >
                    Log out
                </Button>
            </form>
        </div>
     );
}
export default SettingPage;
