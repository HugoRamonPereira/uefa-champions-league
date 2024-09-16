import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import Link from "next/link";

export function PhaseTable() {
  return (
    <section className="w-full h-[800px] bg-uefa-gray">
      <div className="max-w-[1440px] h-full mx-auto py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <Table className="mt-6">
            <TableHeader>
              <TableRow className="!border-0 hover:bg-transparent select-none">
                <TableHead className="text-2xl text-black pb-16 w-52">League phase table</TableHead>
                <TableHead className="font-thin text-xs w-20 h-20 text-center align-bottom">Played</TableHead>
                <TableHead className="font-thin text-xs w-20 h-20 text-center align-bottom">Won</TableHead>
                <TableHead className="font-thin text-xs w-20 h-20 text-center align-bottom">Draw</TableHead>
                <TableHead className="font-thin text-xs w-20 h-20 text-center align-bottom">Lost</TableHead>
                <TableHead className="font-thin text-xs w-20 h-20 text-center align-bottom">For</TableHead>
                <TableHead className="font-thin text-xs w-20 h-20 text-center align-bottom">Against</TableHead>
                <TableHead className="font-thin text-xs w-28 h-20 text-center align-bottom">Goal difference</TableHead>
                <TableHead className="font-bold text-xs w-20 h-20 text-center align-bottom">Points</TableHead>
                <TableHead className="font-thin text-xs w-52 h-20 text-center align-bottom">Form guide</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="">1 Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow className="border-t-transparent">
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arsenal</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center font-extrabold">0</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="py-4 flex flex-col justify-center gap-4">
            <Button className="w-fit gap-1 hover:no-underline text-uefa-blue hover:text-blue-500 text-base" variant="link">
              See full table
              <ChevronDown size={18} strokeWidth={3} />
            </Button>
            <div className="mx-4 text-sm text-uefa-dark-gray">
              <p>
                Before Matchday 1, teams are ordered alphabetically using their abbreviated names as displayed. Want to learn more about the format? Check the
                <Link
                  className="text-uefa-blue"
                  href='https://documents.uefa.com/r/Regulations-of-the-UEFA-Champions-League-2024/25/Article-17-Match-system-league-phase-Online'
                  target="_blank"
                >
                  &nbsp;competition regulations
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}