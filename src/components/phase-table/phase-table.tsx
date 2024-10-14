'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import { phaseTableClubs } from "@/data/data";

export function PhaseTable() {
  const [isExpanded, setIsExpanded] = useState(false);
  const rowsToShow = isExpanded ? phaseTableClubs : phaseTableClubs.slice(0, 8)

  function toggleFullTable() {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="w-full min-h-[800px]  bg-uefa-gray">
      <div className="max-w-[1440px] h-full mx-auto py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <Table className="mt-6">
            <TableHeader>
              <TableRow className="!border-0 hover:bg-transparent select-none">
                <TableHead className="text-2xl font-manrope font-medium text-uefa-darker-gray pb-16 w-52">League phase table</TableHead>
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
             {rowsToShow.map(team => (
                <TableRow key={team.id}>
                  <TableCell className="flex items-center gap-2">
                    <Image src={team.shield} width={30} height={30} alt={team.name} />
                    <p>{team.name}</p>
                  </TableCell>
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
              ))}
            </TableBody>
          </Table>
          <div className="py-4 flex flex-col justify-center gap-4">
            <Button
              className="w-fit gap-1 hover:no-underline text-uefa-blue hover:text-blue-500 text-base"
              variant="link"
              onClick={toggleFullTable}
            >
              {isExpanded ? <p>Close full table</p> : <p>See full table</p>}
              {isExpanded ? <ChevronUp size={18} strokeWidth={3} /> : <ChevronDown size={18} strokeWidth={3} />}
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