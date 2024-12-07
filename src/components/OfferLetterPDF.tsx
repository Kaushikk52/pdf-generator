import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

// Register a custom font
Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf',
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: 'Open Sans',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  table: {
    display: 'flex',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    padding: 5,
  },
  tableCellHeader: {
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
})

interface OfferLetterPDFProps {
  data: {
    position: string
    name: string
    date: string
  }
}

export default function OfferLetterPDF({ data }: OfferLetterPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="/logo.jpeg" style={styles.logo} />
          <View>
            <Text style={styles.companyName}>A9 BUSINESS</Text>
            <Text style={styles.companyName}>CONSULTANCY SERVICES PVT.LTD</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text>Name:- {data.name}</Text>
          <Text>Date:- {data.date}</Text>
          <Text style={styles.title}>Subject: Offer Letter</Text>
        </View>

        <View style={styles.section}>
          <Text>Dear {data.name},</Text>
          <Text>
            As per our discussion, we are pleased to offer you the position of "{data.position}". As discussed, the broad terms
            of this letter of employment offer are set out hereinafter;
          </Text>
        </View>

        <View style={styles.section}>
          <Text>
            Your employment shall begin from the date of your reporting at the premises of our esteemed
            Organization "A9 BUSINESS CONSULTANCY SERVICES PVT.LTD." located at MUMBAI.
          </Text>
        </View>

        <View style={styles.section}>
          <Text>
            Your employment with company shall come to an end either upon completion of Fixed Term or
            on the date when Company's services agreement with its said business client coming to an end
            whichever is earlier.
          </Text>
        </View>

        <View style={styles.section}>
          <Text>
            For all reasons you will be deemed an employee of A9 BUSINESS CONSULTANCY SERVICES
            PVT.LTD
          </Text>
        </View>

        <View style={styles.section}>
          <Text>The formal letter of Appointment will be issued immediately after you join the Company.</Text>
          <Text>➢ KYC Documents – Copy of Aadhaar card, PAN card, Passport size photograph</Text>
          <Text>➢ Educational documents – Copy of 10th , 12th & Graduation Mark sheet</Text>
          <Text>➢ Experience documents – Copy of Experience proof</Text>
          <Text>➢ Cancel Cheque Copy or Bank Statement (Existing Saving bank Account, if any)</Text>
        </View>

        <View style={styles.section}>
          <Text>
            Your offer has been made based on the information furnished by you. However, if there is any
            discrepancy found during the antecedent check conducted by the Company or in the copies of
            the documents/certificates given by you as a proof in support of the above, the company
            reserves the right to revoke the offer & your appointment thereafter at any time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text>You are requested to refer page no. 3 of this letter for work related guidelines</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Your annual compensation package shall be as per enclosed annexure.</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.title}>Enclosure: Annexure containing compensation details</Text>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableCellHeader, { flex: 2 }]}>
              <Text>Particulars</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellHeader, { flex: 1 }]}>
              <Text>Amount (INR)</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Basic + DA</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>15,000/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>HRA</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>2,500/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Executive Allowance</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>1,700/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Monthly Gross Salary [A]</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>19,200/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Less PT (PROFESSIONAL TAX)</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>200/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Net Monthly Take Home (A-B)*</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>19,000/-</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text>
            The above-mentioned salary annexure is exclusive of all Income Tax deductions, if applicable.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>
            Please accept the above stated by signing the duplicate copy of this offer letter and return the same
            for our record.
          </Text>
          <Text>We wish you all the best!</Text>
          <Text style={{ marginTop: 20 }}>Thanking you,</Text>
          <Text>For A9 BUSINESS CONSULTANCY SERVICES PVT.LTD I Confirm and Accept this Offer Letter and Annexure</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <Text>Authorized Signatory</Text>
            <Text>{data.name}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

