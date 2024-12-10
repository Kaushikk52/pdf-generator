import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Register custom fonts
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
      fontWeight: 700,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Open Sans",
    backgroundColor: "#F8F9FA",
  },
  header: {
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 90,
    height: 50,
    marginRight: 15,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3B82F6",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#4A90E2",
  },
  subject: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5,
    color: "#2C3E50",
    textAlign: "center",
  },
  section: {
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5,
    color: "#2C3E50",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 5,
    width: 200,
    maxWidth: 200,
    color: "#34495E",
    textAlign: "left",
  },
  text: {
    marginBottom: 5,
    lineHeight: 1.5,
  },
  bulletPoint: {
    marginLeft: 10,
    flexDirection: "row",
  },
  bullet: {
    width: 10,
  },
  bulletContent: {
    flex: 1,
  },
  table: {
    display: "flex",
    width: "auto",
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#4A90E2",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#4A90E2",
  },
  tableCellHeader: {
    backgroundColor: "#E8F0FE",
    fontWeight: 700,
    color: "#2C3E50",
  },
  footer: {
    position: "absolute",
    bottom: 25,
    left: 30,
    right: 30,
    textAlign: "center",
    color: "#7F8C8D",
    borderTop: 1,
    borderTopColor: "#BDC3C7",
    paddingTop: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 35,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#7F8C8D",
  },
  divider: {
    height: 1,
    backgroundColor: "#3B82F6", // #515a5a
    marginVertical: 5,
  },
  referenceAddress: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 0,
    textAlign: "left",
    fontSize: 8,
    color: "black",
  },
  signature: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  signatureLine: {
    width: 200,
    borderBottom: 1,
    borderBottomColor: "#2C3E50",
  },
  companyNameContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  companyNameSecondary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B5563",
    marginTop: 4,
  },
  tagline: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
    fontStyle: 'italic',
  },
  logoContainer: {
    padding: 10,
    marginRight: 20,
  },
});

interface OfferLetterPDFProps {
  data: {
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
  };
}

export default function OfferLetterPDF({ data }: OfferLetterPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.logoContainer}>
              <Image src="/logo.png" style={styles.logo} />
            </View>
            <View style={styles.companyNameContainer}>
              <Text style={styles.companyName}>RK</Text>
              <Text style={styles.companyNameSecondary}>
                Insurance Services
              </Text>
              <Text style={styles.tagline}>
                Securing Your Future, One Policy at a Time
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}/>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Date:- {data.date}</Text>
          <Text style={styles.subtitle}>Name:- {data.name}</Text>
          <Text style={styles.subtitle}>Address:- {data.address}</Text>
          <Text style={styles.subtitle}>Mail:- {data.mail}</Text>
          <Text style={styles.subtitle}>Mobile:- {data.mobile}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subject}>OFFER LETTER</Text>
          <Text style={styles.text}>Dear {data.name},</Text>
          <Text style={styles.text}>
            As per our discussion, we are pleased to offer you the position of "
            {data.position}". As discussed, the broad terms of this letter of
            employment offer are set out hereinafter;
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Your employment shall begin from the date of your reporting at the
            premises of our esteemed Organization "RK Insurance Service" located
            at MUMBAI.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Your employment with company shall come to an end either upon
            completion of Fixed Term or on the date when Company's services
            agreement with its said business client coming to an end whichever
            is earlier.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            For all reasons you will be deemed an employee of RK INSURANCE
            SERVICES PVT.LTD
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            The formal letter of Appointment will be issued immediately after
            you join the Company.
          </Text>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletContent}>
              KYC Documents – Copy of Aadhaar card, PAN card, Passport size
              photograph
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletContent}>
              Educational documents – Copy of 10th , 12th & Graduation Mark
              sheet
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletContent}>
              Experience documents – Copy of Experience proof
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletContent}>
              Cancel Cheque Copy or Bank Statement (Existing Saving bank
              Account, if any)
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Your offer has been made based on the information furnished by you.
            However, if there is any discrepancy found during the antecedent
            check conducted by the Company or in the copies of the
            documents/certificates given by you as a proof in support of the
            above, the company reserves the right to revoke the offer & your
            appointment thereafter at any time.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            You are requested to refer page no. 3 of this letter for work
            related guidelines
          </Text>
        </View>
        <>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.referenceAddress} fixed>
            D/ 319, Shanti Shopping Center, Mira Road East - 401107.
          </Text>
        </>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            Your annual compensation package shall be as per enclosed annexure.
          </Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.subtitle}>
            Enclosure: Annexure containing compensation details
          </Text>
          <View style={[styles.tableRow, styles.tableCellHeader]}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Particulars</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>Monthly (INR)</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>Annual (INR)</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Basic</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.basicDAMonthly}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.basicDAYearly}/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>HRA</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.hraMonthly}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.hraYearly}/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Special Allowance</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.executiveAllowanceMonthly}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.executiveAllowanceYearly}/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Bonus</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.bonusMonthly}</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.bonusYearly}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>EPF (Employer Contribution)</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.epfMonthly}</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.epfYearly}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Gross Salary [A]</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.monthlyGrossSalary}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.yearlyGrossSalary}/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>PT (PROFESSIONAL TAX)</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.professionalTaxMonthly}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.professionalTaxYearly}/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Income Tax</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.incomeTaxMonthly}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.incomeTaxYearly}/-</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>Net Salary *</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.netMonthlyTakeHome}/-</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{data.netYearlyTakeHome}/-</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            The above-mentioned salary annexure is exclusive of all Income Tax
            deductions, if applicable.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Please accept the above stated by signing the duplicate copy of this
            offer letter and return the same for our record.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>We wish you all the best!</Text>
        </View>
        <View style={styles.footer}>
          <Text>Thanking you,</Text>
          <Text>
            For RK Insurance Service I Confirm and Accept this Offer Letter and
            Annexure
          </Text>
          <View style={styles.signature}>
            <View>
              <Text>Authorized Signatory</Text>
              <View style={styles.signatureLine} />
            </View>
            <View>
              <Text>{data.name}</Text>
              <View style={styles.signatureLine} />
            </View>
          </View>
        </View>
        <>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.referenceAddress} fixed>
            D/ 319, Shanti Shopping Center, Mira Road East - 401107.
          </Text>
        </>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Guidelines</Text>
        <View style={styles.section}>
          <Text style={styles.text}>
            You shall be informed that your shift timing is 9:30-7.00 pm. The
            office hours are subject to change at the management's discretion;
            hence every employee should adhere to their timing attendance. We
            attach consideration significance to the strict adherence of these
            timings and to regular attendance.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            The employee should not disclose his salary to anyone apart from the
            concerned HR of the organization or leak out any confidential data
            of the company or tamper the company's property where about should
            not be found on personal calls through the company's cellular
            device, if found guilty the deduction of the bill would be taken out
            from the salary along with the necessity actions by the management.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            You shall use the Company name, Logos, trademarks or other
            identifiers strictly in the manner permitted by the Company's
            policies or for the purposes of provision of Services delegated to
            you to the extent required.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Attendance Criteria- 90 minute Talk time or 4 meeting in a Day or
            else 1 sales of a Day.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            You shall be on probation for a period of six months from the date
            of joining service of the Company after completion at six months and
            in the absence of any letter of confirmation from the Management, it
            is understood that your Probation period has been extended until
            such time as you get a letter of confirmation. During probation you
            will not be entitled to any form of paid leave which is otherwise
            available to confirmed employees as per the rules of the Company.
            Thereafter, subject to your good performance your services would be
            confirmed.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            You will get fixed week off. (Sunday/Market specific) incase if you
            take any leave on Saturday as well as Monday you Sunday will be
            counted as lost of pay & the company won't be liable for that.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            In case of sick leave you should carry a medical proof and take
            approval from the TL / Manager/Operations Head and submit to the HR,
            else the attendance will be marked as unauthorized absence. For one
            day unauthorized absence, salary deduction will be for 1 day. Incase
            if you take 1 day leave without informing the Authorized person you
            will be marked absent for 2 days if this is done multiply time we
            will be taking strict action against you.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            In case of non-reporting for 3 days, the company holds the right to
            revoke the offer of employment with no further dues. You will be
            consider absconded and the company will be charging you penalty
            according to the company loss.
          </Text>
        </View>
        <>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.referenceAddress} fixed>
            D/ 319, Shanti Shopping Center, Mira Road East - 401107.
          </Text>
        </>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>
            When you want to leave the company then you need to serve 60 days of
            notice period. If you want to leave the company on immediate basis
            then there will be 30 days of deduction from your salary.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Salary cycle is 1st – 30th of every month which shall be paid before
            15th of succeeding Month.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            The office hours are subject to change at the management's
            discretion hence every employee should adhere to their timing
            attendance. We attach consideration significance to the strict
            adherence of these timings and to regular attendance.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Though you have been engaged for a specific position, the company
            reserves the right to determine the type of range of work you may be
            subsequently called upon to perform as also the place where you may
            be posted. Your services can also be transferred to any concerned
            within the group/associate companies.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Apart from your usual duties, your scope of work will extend over
            any kind of work as may be required by circumstances and the
            Management's decision in this regard will be final.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            You shall abide by the rules and regulations of the company as
            amended from time to time is letter and spirit. Any non-compliance
            of the same shall render you liable for action by the management
            including termination of employment. The management reserves the
            right to determine compensation changes from year to year depending
            on your performance during the year under review. You are not
            entitled to be employed with any other employer or be interested
            directly or indirectly in other business, as a freelancer, vocation
            or calling during your employment with the Company. Such disclosure
            will lead to direct termination of your appointment without pay. Any
            information that you obtain from time to time regarding the
            Company's process methods practices etc. should be treated as being
            utmost confidential and proprietary in character and will not
            divulge the same to any one not in employment with the Company. Any
            such act will be considered seriously detrimental to the interest of
            the company and be dealt with appropriately. Your work in the
            organization will be subject to the rules and regulations of the
            organization as laid down in relation to conduct, discipline and
            other matters. You will always be alive to responsibilities and
            duties attached to your office and conduct yourself accordingly. You
            must effectively perform to ensure results. Employees must obtain
            written approval from their supervisor and the Human Resources
            department before engaging in any outside employment. Such
            employment must not interfere with job performance, involve working
            with competitors, or create any conflict of interest with RK
            Insurance Service Failure to comply with this policy may result in
            disciplinary action, including termination. This concise clause
            covers the key points: the need for approval, performance standards,
            conflict of interest, and potential consequences. I accepted the
            above terms & Guidelines. If I am not following the above rules,
            then company will take an action and I have no objection in this
            regards.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Candidate's Name:
            ...........................................................................
          </Text>
          <Text style={styles.subtitle}>
            Candidate's Email:
            ...........................................................................
          </Text>
          <Text style={styles.subtitle}>
            Candidate's Signature:
            .......................................................................
          </Text>
          <Text style={styles.subtitle}>
            Date: ................................................
          </Text>
        </View>
        <>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.referenceAddress} fixed>
            D/ 319, Shanti Shopping Center, Mira Road East - 401107.
          </Text>
        </>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Declaration</Text>
          <Text style={styles.text}>
            I, {data.name}, have read, understood, and accept all the terms and
            conditions outlined in this offer letter. I agree to abide by the
            company's policies, rules, and regulations during my employment with
            RK Insurance Service.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Candidate's Name:
            ...........................................................................
          </Text>
          <Text style={styles.subtitle}>
            Candidate's Email:
            ...........................................................................
          </Text>
          <Text style={styles.subtitle}>
            Candidate's Signature:
            .......................................................................
          </Text>
          <Text style={styles.subtitle}>
            Date: ................................................
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>For Office Use Only</Text>
          <Text style={styles.subtitle}>
            Date of Joining:
            ...........................................................................
          </Text>
          <Text style={styles.subtitle}>
            Employee ID:
            .............................................................................
          </Text>
          <Text style={styles.subtitle}>
            Department:
            ...............................................................................
          </Text>
          <Text style={styles.subtitle}>
            Reporting Manager:
            .....................................................................
          </Text>
        </View>
        <View style={styles.footer}>
          <Text>
            This is a system-generated document and does not require a physical
            signature.
          </Text>
        </View>
        <>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.referenceAddress} fixed>
            D/ 319, Shanti Shopping Center, Mira Road East - 401107.
          </Text>
        </>
      </Page>
    </Document>
  );
}
