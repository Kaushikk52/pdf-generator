import { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import OfferLetterPDF from './components/OfferLetterPDF'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

interface OfferLetterData {
  position: string
  name: string
  date: string
  basicDA: string
  hra: string
  executiveAllowance: string
  bonus: string
  epf: string
  monthlyGrossSalary: string
  professionalTax: string
  esi: string
  totalDeduction: string
  netMonthlyTakeHome: string
}

export default function App() {
  const [formData, setFormData] = useState<OfferLetterData>({
    position: '',
    name: '',
    date: new Date().toISOString().split('T')[0],
    basicDA: '15,000',
    hra: '2,500',
    executiveAllowance: '1,700',
    bonus: '--',
    epf: '--',
    monthlyGrossSalary: '19,200',
    professionalTax: '200',
    esi: '--',
    totalDeduction: '--',
    netMonthlyTakeHome: '19,000',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">
           R K INSURANCE SERVICE - Offer Letter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                name="position"
                placeholder="Enter Position"
                value={formData.position}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="basicDA">Basic + DA</Label>
              <Input
                id="basicDA"
                name="basicDA"
                value={formData.basicDA}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hra">HRA</Label>
              <Input
                id="hra"
                name="hra"
                value={formData.hra}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="executiveAllowance">Executive Allowance</Label>
              <Input
                id="executiveAllowance"
                name="executiveAllowance"
                value={formData.executiveAllowance}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bonus">Bonus</Label>
              <Input
                id="bonus"
                name="bonus"
                value={formData.bonus}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="epf">EPF (Employer Contribution)</Label>
              <Input
                id="epf"
                name="epf"
                value={formData.epf}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyGrossSalary">Monthly Gross Salary [A]</Label>
              <Input
                id="monthlyGrossSalary"
                name="monthlyGrossSalary"
                value={formData.monthlyGrossSalary}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="professionalTax">Less PT (PROFESSIONAL TAX)</Label>
              <Input
                id="professionalTax"
                name="professionalTax"
                value={formData.professionalTax}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="esi">Less ESI 0.75% Employee</Label>
              <Input
                id="esi"
                name="esi"
                value={formData.esi}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalDeduction">Total Employee's Deduction [B]</Label>
              <Input
                id="totalDeduction"
                name="totalDeduction"
                value={formData.totalDeduction}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="netMonthlyTakeHome">Net Monthly Take Home (A-B)*</Label>
              <Input
                id="netMonthlyTakeHome"
                name="netMonthlyTakeHome"
                value={formData.netMonthlyTakeHome}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <PDFDownloadLink
            document={<OfferLetterPDF data={formData} />}
            fileName="offer-letter.pdf"
            className="block w-full"
          > 
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled={ !formData.name || !formData.position}>
                Download Offer Letter
              </Button>
          
          </PDFDownloadLink>
        </CardContent>
      </Card>
    </div>
  )
}

