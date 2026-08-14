import { useEffect, useMemo, useState } from 'react'
import { FiDownload, FiEye, FiInbox, FiMail, FiSearch } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import DataTable from '../../../components/admin/DataTable/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import Modal from '../../../components/admin/Modal/index.js'
import StatusBadge from '../../../components/admin/StatusBadge/index.js'
import Button from '../../../components/Button/index.js'
import { SelectField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta, ENQUIRY_STATUSES, enquiryStatusLabels } from '../../../constants/admin.js'
import { listEnquiries, updateEnquiryStatus } from '../../../services/enquiries.js'
import {
  DetailGrid,
  DetailLabel,
  DetailValue,
  EnquiriesPage,
  FilterBar,
  FilterButton,
  LoadError,
  SearchWrap,
  Toolbar,
} from './Enquiries.styles.js'

const STATUS_FILTERS = ['all', ...ENQUIRY_STATUSES]

const formatDate = (isoDate) => {
  if (!isoDate) return '—'
  try {
    return new Intl.DateTimeFormat('en-AU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(isoDate))
  } catch {
    return isoDate
  }
}

const formatDateTime = (isoDate) => {
  if (!isoDate) return '—'
  try {
    return new Intl.DateTimeFormat('en-AU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(isoDate))
  } catch {
    return isoDate
  }
}

const toCsv = (rows) => {
  const header = ['customer_name', 'email', 'phone', 'event_type', 'event_date', 'venue', 'guest_count', 'setup_required', 'selected_services', 'message', 'status', 'created_at']
  const escape = (value) => {
    const text = String(value ?? '')
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }
  return [header, ...rows.map((row) => header.map((key) => escape(row[key])))]
    .map((line) => line.join(','))
    .join('\n')
}

function Enquiries() {
  const [enquiries, setEnquiries] = useState([])
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const [loadError, setLoadError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    let mounted = true
    listEnquiries().then((result) => {
      if (!mounted) return
      setLoading(false)
      if (result.error) {
        setLoadError(result.error.message)
        return
      }
      setEnquiries(result.data ?? [])
    })
    return () => {
      mounted = false
    }
  }, [])

  const visible = useMemo(() => {
    const normalized = search.trim().toLowerCase()
    const filteredByStatus = enquiries.filter(
      (enquiry) => filter === 'all' || enquiry.status === filter,
    )
    if (!normalized) return filteredByStatus
    return filteredByStatus.filter((enquiry) =>
      [
        enquiry.customer_name,
        enquiry.email,
        enquiry.event_type,
        enquiry.venue,
        enquiry.phone,
      ]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(normalized)),
    )
  }, [enquiries, filter, search])

  const handleStatusChange = async (id, status) => {
    const result = await updateEnquiryStatus(id, status)
    if (result.data) {
      setEnquiries((current) =>
        current.map((enquiry) => (enquiry.id === id ? result.data : enquiry)),
      )
      setSelected((current) => (current?.id === id ? result.data : current))
    }
  }

  const handleExport = () => {
    const csv = toCsv(enquiries)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  const countFor = (status) =>
    status === 'all'
      ? enquiries.length
      : enquiries.filter((enquiry) => enquiry.status === status).length

  return (
    <EnquiriesPage>
      <AdminPageHeader
        {...adminPageMeta.enquiries}
        actions={
          <Button type="button" variant="outline" onClick={handleExport} disabled={enquiries.length === 0}>
            <FiDownload aria-hidden="true" size={15} />
            Export CSV
          </Button>
        }
      />

      <Toolbar>
        <FilterBar aria-label="Filter enquiries by status">
          {STATUS_FILTERS.map((status) => (
            <FilterButton
              key={status}
              type="button"
              aria-pressed={filter === status}
              $active={filter === status}
              onClick={() => setFilter(status)}
            >
              {status === 'all' ? 'All' : enquiryStatusLabels[status]}
              <span>{countFor(status)}</span>
            </FilterButton>
          ))}
        </FilterBar>
        <SearchWrap>
          <FiSearch aria-hidden="true" size={15} />
          <TextField
            aria-label="Search enquiries"
            type="search"
            placeholder="Search by name, email or event…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchWrap>
      </Toolbar>

      {loadError ? <LoadError>{loadError}</LoadError> : null}

      <DataTable
        loading={loading}
        caption="Enquiries"
        columns={[
          { key: 'name', header: 'Name', render: (row) => <strong>{row.customer_name ?? '—'}</strong> },
          { key: 'email', header: 'Email', render: (row) => row.email ?? '—' },
          { key: 'event', header: 'Event', render: (row) => row.event_type ?? '—' },
          { key: 'date', header: 'Date', render: (row) => formatDate(row.event_date) },
          {
            key: 'status',
            header: 'Status',
            render: (row) => (
              <SelectField
                value={row.status ?? 'new'}
                onChange={(event) => handleStatusChange(row.id, event.target.value)}
                options={ENQUIRY_STATUSES.map((status) => ({
                  value: status,
                  label: enquiryStatusLabels[status],
                }))}
              />
            ),
          },
          {
            key: 'actions',
            header: '',
            render: (row) => (
              <Button type="button" variant="ghost" onClick={() => setSelected(row)}>
                <FiEye aria-hidden="true" size={15} />
                View
              </Button>
            ),
          },
        ]}
        rows={visible}
        rowKey={(row) => row.id}
        emptyState={
          <EmptyState
            icon={<FiInbox aria-hidden="true" />}
            title={filter === 'all' ? 'No enquiries yet' : `No ${filter} enquiries`}
            description="Enquiries from the contact form will appear here."
          />
        }
      />

      <Modal
        open={Boolean(selected)}
        title={selected?.customer_name ?? 'Enquiry'}
        description={selected ? `Received ${formatDateTime(selected.created_at)}` : undefined}
        onClose={() => setSelected(null)}
        footer={
          <>
            {selected?.email ? (
              <Button type="button" variant="outline" as="a" href={`mailto:${selected.email}`}>
                <FiMail aria-hidden="true" size={15} />
                Reply by email
              </Button>
            ) : null}
            <SelectField
              value={selected?.status ?? 'new'}
              onChange={(event) => handleStatusChange(selected.id, event.target.value)}
              options={ENQUIRY_STATUSES.map((status) => ({
                value: status,
                label: `Mark ${enquiryStatusLabels[status]}`,
              }))}
            />
          </>
        }
      >
        <DetailGrid>
          <DetailRow label="Email" value={selected?.email} />
          <DetailRow label="Phone" value={selected?.phone} />
          <DetailRow label="Event type" value={selected?.event_type} />
          <DetailRow label="Event date" value={formatDate(selected?.event_date)} />
          <DetailRow label="Venue" value={selected?.venue} />
          <DetailRow label="Guest count" value={selected?.guest_count} />
          <DetailRow label="Setup required" value={selected?.setup_required} />
          <DetailRow
            label="Services of interest"
            value={Array.isArray(selected?.selected_services) ? selected.selected_services.join(', ') : selected?.selected_services}
          />
          <DetailRow label="Message" value={selected?.message} />
          <DetailRow label="Status" value={<StatusBadge status={selected?.status ?? 'new'} />} />
        </DetailGrid>
      </Modal>
    </EnquiriesPage>
  )
}

const DetailRow = ({ label, value }) => (
  <>
    <DetailLabel>{label}</DetailLabel>
    <DetailValue>{value || '—'}</DetailValue>
  </>
)

export default Enquiries