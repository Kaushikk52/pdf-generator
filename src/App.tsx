import { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import OfferLetterPDF from './components/OfferLetterPDF'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface OfferLetterData {
  position: string
  name: string
  date: string
}

export default function App() {
  const [formData, setFormData] = useState<OfferLetterData>({
    position: '',
    name: '',
    date: new Date().toLocaleDateString(),
  })

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">
            A9 Business Offer Letter Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Enter Position"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <PDFDownloadLink
            document={<OfferLetterPDF data={formData} />}
            fileName="offer-letter.pdf"
            className="block w-full"
          >
            {({ loading }) => (
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled={loading || !formData.name || !formData.position}>
                {loading ? 'Generating...' : 'Download Offer Letter'}
              </Button>
            )}
          </PDFDownloadLink>
        </CardContent>
      </Card>
    </div>
  )
}

