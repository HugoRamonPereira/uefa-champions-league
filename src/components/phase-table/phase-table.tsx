'use client'

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import Link from "next/link";
import arsenal from '/public/assets/images/phase-table/arsenal-table.png'
import astonVilla from '/public/assets/images/phase-table/aston-villa-table.png'
import atalanta from '/public/assets/images/phase-table/atalanta-table.png'
import atlMadrid from '/public/assets/images/phase-table/atl-madrid-table.png'
import bDortmund from '/public/assets/images/phase-table/b-dortmund-table.png'
import barcelona from '/public/assets/images/phase-table/barcelona-table.png'
import bayern from '/public/assets/images/phase-table/bayern-table.png'
import benfica from '/public/assets/images/phase-table/benfica-table.png'
import bologna from '/public/assets/images/phase-table/bologna-table.png'
import brest from '/public/assets/images/phase-table/brest-table.png'
import celtic from '/public/assets/images/phase-table/celtic-table.png'
import clubBrugge from '/public/assets/images/phase-table/club-brugge-table.png'
import crvenaZvezda from '/public/assets/images/phase-table/crvena-zvezda-table.png'
import feyenoord from '/public/assets/images/phase-table/feyenoord-table.png'
import girona from '/public/assets/images/phase-table/girona-table.png'
import gnkDinamo from '/public/assets/images/phase-table/gnk-dinamo-table.png'
import inter from '/public/assets/images/phase-table/inter-table.png'
import juventus from '/public/assets/images/phase-table/juventus-table.png'
import leipzig from '/public/assets/images/phase-table/leipzig-table.png'
import leverkusen from '/public/assets/images/phase-table/leverkusen-table.png'
import lille from '/public/assets/images/phase-table/lille-table.png'
import liverpool from '/public/assets/images/phase-table/liverpool-table.png'
import manCity from '/public/assets/images/phase-table/man-city-table.png'
import milan from '/public/assets/images/phase-table/milan-table.png'
import monaco from '/public/assets/images/phase-table/monaco-table.png'
import paris from '/public/assets/images/phase-table/paris-table.png'
import psv from '/public/assets/images/phase-table/psv-table.png'
import realMadrid from '/public/assets/images/phase-table/real-madrid-table.png'
import sBratislava from '/public/assets/images/phase-table/s-bratislava-table.png'
import salzburg from '/public/assets/images/phase-table/salzburg-table.png'
import shakhtar from '/public/assets/images/phase-table/shakhtar-table.png'
import spartaPraha from '/public/assets/images/phase-table/sparta-praha-table.png'
import sporting from '/public/assets/images/phase-table/sporting-table.png'
import sturmGraz from '/public/assets/images/phase-table/sturm-graz-table.png'
import stuttgart from '/public/assets/images/phase-table/stuttgart-table.png'
import youngBoys from '/public/assets/images/phase-table/young-boys-table.png'
import Image from "next/image";

// import type { StaticImageData } from "next/image";

// interface phaseTableClubsProps {
//   id: number
//   name: string
//   shield: StaticImageData
// }

const phaseTableClubs = [
  { id: 1, name: 'Arsenal', shield: arsenal },
  { id: 2, name: 'Atalanta', shield: atalanta },
  { id: 3, name: 'Aston Villa', shield: astonVilla },
  { id: 4, name: 'Atl. Madrid', shield: atlMadrid },
  { id: 5, name: 'B. Dortmund', shield: bDortmund },
  { id: 6, name: 'Barcelona', shield: barcelona },
  { id: 7, name: 'Bayern München', shield: bayern },
  { id: 8, name: 'Benfica', shield: benfica },
  { id: 9, name: 'Bologna', shield: bologna },
  { id: 10, name: 'Brest', shield: brest },
  { id: 11, name: 'Celtic', shield: celtic },
  { id: 12, name: 'Club Brugge', shield: clubBrugge },
  { id: 13, name: 'Crvena Zvezda', shield: crvenaZvezda },
  { id: 14, name: 'Feyenoord', shield: feyenoord },
  { id: 15, name: 'Girona', shield: girona },
  { id: 16, name: 'GNK Dinamo', shield: gnkDinamo },
  { id: 17, name: 'Inter', shield: inter },
  { id: 18, name: 'Juventus', shield: juventus },
  { id: 19, name: 'Leipzig', shield: leipzig },
  { id: 20, name: 'Leverkusen', shield: leverkusen },
  { id: 21, name: 'Lille', shield: lille },
  { id: 22, name: 'Liverpool', shield: liverpool },
  { id: 23, name: 'Man City', shield: manCity },
  { id: 24, name: 'Milan', shield: milan },
  { id: 25, name: 'Monaco', shield: monaco },
  { id: 26, name: 'Paris', shield: paris },
  { id: 27, name: 'PSV', shield: psv },
  { id: 28, name: 'Real Madrid', shield: realMadrid },
  { id: 29, name: 'S. Bratislava', shield: sBratislava },
  { id: 30, name: 'Salzburg', shield: salzburg },
  { id: 31, name: 'Shakhtar', shield: shakhtar },
  { id: 32, name: 'Sparta Praha', shield: spartaPraha },
  { id: 33, name: 'Sporting CP', shield: sporting },
  { id: 34, name: 'Sturm Graz', shield: sturmGraz },
  { id: 35, name: 'Stuttgart', shield: stuttgart },
  { id: 36, name: 'Young Boys', shield: youngBoys },
]

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