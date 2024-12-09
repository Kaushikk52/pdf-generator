import { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import OfferLetterPDF from './components/OfferLetterPDF'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

interface OfferLetterData {
  position: string;
  name: string;
  date: string;
  address: string;
  mail: string;
  mobile: string;
  basicDAMonthly: string;
  basicDAYearly: string;
  hraMonthly: string;
  hraYearly: string;
  executiveAllowanceMonthly: string;
  executiveAllowanceYearly: string;
  bonusMonthly: string;
  bonusYearly: string;
  epfMonthly: string;
  epfYearly: string;
  monthlyGrossSalary: string;
  yearlyGrossSalary: string;
  professionalTaxMonthly: string;
  professionalTaxYearly: string;
  incomeTaxMonthly: string;
  incomeTaxYearly: string;
  netMonthlyTakeHome: string;
  netYearlyTakeHome: string;
}

export default function App() {
  const [formData, setFormData] = useState<OfferLetterData>({
    position: '',
    name: '',
    date: new Date().toISOString().split('T')[0],
    address: '',
    mail: '',
    mobile: '',
    basicDAMonthly: '',
    basicDAYearly: '',
    hraMonthly: '',
    hraYearly: '',
    executiveAllowanceMonthly: '',
    executiveAllowanceYearly: '',
    bonusMonthly: '',
    bonusYearly: '',
    epfMonthly: '',
    epfYearly: '',
    monthlyGrossSalary: '',
    yearlyGrossSalary: '',
    professionalTaxMonthly: '',
    professionalTaxYearly: '',
    incomeTaxMonthly: '',
    incomeTaxYearly: '',
    netMonthlyTakeHome: '',
    netYearlyTakeHome: '',
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
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">
            RK Insurance Service - Offer Letter
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
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mail">Email</Label>
              <Input
                id="mail"
                name="mail"
                type="email"
                placeholder="Enter Email"
                value={formData.mail}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <Input
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="basicDAMonthly">Basic(Monthly)</Label>
              <Input
                id="basicDAMonthly"
                name="basicDAMonthly"
                value={formData.basicDAMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="basicDAYearly">Basic(Yearly)</Label>
              <Input
                id="basicDAYearly"
                name="basicDAYearly"
                value={formData.basicDAYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hraMonthly">HRA (Monthly)</Label>
              <Input
                id="hraMonthly"
                name="hraMonthly"
                value={formData.hraMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hraYearly">HRA (Yearly)</Label>
              <Input
                id="hraYearly"
                name="hraYearly"
                value={formData.hraYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="executiveAllowanceMonthly">Special Allowance (Monthly)</Label>
              <Input
                id="executiveAllowanceMonthly"
                name="executiveAllowanceMonthly"
                value={formData.executiveAllowanceMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="executiveAllowanceYearly">Special Allowance (Yearly)</Label>
              <Input
                id="executiveAllowanceYearly"
                name="executiveAllowanceYearly"
                value={formData.executiveAllowanceYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bonusMonthly">Bonus (Monthly)</Label>
              <Input
                id="bonusMonthly"
                name="bonusMonthly"
                value={formData.bonusMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bonusYearly">Bonus (Yearly)</Label>
              <Input
                id="bonusYearly"
                name="bonusYearly"
                value={formData.bonusYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="epfMonthly">EPF (Monthly)</Label>
              <Input
                id="epfMonthly"
                name="epfMonthly"
                value={formData.epfMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="epfYearly">EPF (Yearly)</Label>
              <Input
                id="epfYearly"
                name="epfYearly"
                value={formData.epfYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyGrossSalary">Gross Salary (Monthly)</Label>
              <Input
                id="monthlyGrossSalary"
                name="monthlyGrossSalary"
                value={formData.monthlyGrossSalary}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearlyGrossSalary">Gross Salary (Yearly)</Label>
              <Input
                id="yearlyGrossSalary"
                name="yearlyGrossSalary"
                value={formData.yearlyGrossSalary}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="professionalTaxMonthly">Professional Tax (Monthly)</Label>
              <Input
                id="professionalTaxMonthly"
                name="professionalTaxMonthly"
                value={formData.professionalTaxMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="professionalTaxYearly">Professional Tax (Yearly)</Label>
              <Input
                id="professionalTaxYearly"
                name="professionalTaxYearly"
                value={formData.professionalTaxYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incomeTaxMonthly">Income Tax (Monthly)</Label>
              <Input
                id="incomeTaxMonthly"
                name="incomeTaxMonthly"
                value={formData.incomeTaxMonthly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incomeTaxYearly">Income Tax (Yearly)</Label>
              <Input
                id="incomeTaxYearly"
                name="incomeTaxYearly"
                value={formData.incomeTaxYearly}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="netMonthlyTakeHome">Net Salary (Monthly)</Label>
              <Input
                id="netMonthlyTakeHome"
                name="netMonthlyTakeHome"
                value={formData.netMonthlyTakeHome}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="netYearlyTakeHome">Net Salary (Yearly)</Label>
              <Input
                id="netYearlyTakeHome"
                name="netYearlyTakeHome"
                value={formData.netYearlyTakeHome}
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

