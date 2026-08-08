# Database

## Purpose

This document defines the database architecture for the Moments in Blooms website and CMS.

The goal is to create a clean, scalable, and maintainable database structure that supports the current project scope while allowing future expansion without major redesign.

The system is built on **Supabase (PostgreSQL)** and follows best practices for naming conventions, normalization, security, and scalability.

---

# Overview

The database is designed around a modular content management system rather than a traditional e-commerce platform.

The current scope includes:

- Public Website
- Custom CMS
- Services Management
- Gallery Management
- FAQ Management
- Enquiry Management
- Basic SEO
- User Authentication

Advanced business features such as Bookings, Payments, CRM, Quotes, Invoices, and Inventory Management are intentionally excluded from Version 1 and reserved for future upgrades.

---

# Current Status

Database architecture approved.

Supabase migration scripts and Row Level Security (RLS) policies will be implemented during backend development.

---

# Database Design Principles

The database follows these principles:

- Normalize related content
- Avoid duplicated data
- Keep tables focused on a single responsibility
- Support future expansion
- Never over-engineer the initial release
- Prefer relationships over nested JSON whenever practical
- All uploaded media will be stored in Supabase Storage
- Database tables store only file URLs and metadata

---

# Naming Conventions

## Tables

- plural
- snake_case

Examples

services_categories

service_subcategories

service_items

gallery_items

faq_items

---

## Columns

snake_case

Examples

created_at

updated_at

display_order

is_featured

is_published

---

## Primary Keys

All tables use

id (UUID)

---

## Foreign Keys

Use

<parent_table_singular>\_id

Example

category_id

subcategory_id

service_item_id

album_id

enquiry_id

---

# Tables

---

# site_settings

Stores global website settings.

Only one active record should exist.

Columns

- id
- business_name
- business_address
- business_email
- business_phone
- business_hours
- logo_url
- favicon_url
- facebook_url
- instagram_url
- tiktok_url
- google_maps_embed
- footer_text
- default_seo_title
- default_seo_description
- created_at
- updated_at

---

# home_content

Stores editable homepage content.

Examples

- Hero
- About Preview
- Featured Services
- CTA
- Statistics

---

# about_content

Stores About page content.

Examples

- Story
- Mission
- Vision
- Team
- Values

---

# service_categories

Top-level service collections, representing each main offering under the Moments in Blooms master brand. The Blissful Nest entry is modeled as a sub-brand collection with its own nested product categories.

Examples

Decor Hire

Luxe Photobooth

Blissful Nest

Columns

- id
- name
- slug
- brand (parent brand id — e.g. Moments in Blooms or the Blissful Nest sub-brand)
- collection_type (e.g. collection, sub-brand)
- description
- featured_image
- icon
- display_order
- is_featured
- is_published
- seo_title
- seo_description
- created_at
- updated_at

---

# service_subcategories

Each service collection may contain multiple subcategories. For the Blissful Nest sub-brand, subcategories represent its product categories (e.g. Claw Machine Hire), with future Blissful Nest products added as new subcategory rows.

Examples

Florals

Backdrops

Props

Custom Decor

Claw Machine Hire

Columns

- id
- category_id
- name
- slug
- description
- featured_image
- display_order
- is_published
- created_at
- updated_at

Relationship

One Category

↓

Many Subcategories

---

# service_items

Actual services displayed to website visitors.

Examples

Flower Tower

White Arch

Premium Mirror Booth

Columns

- id
- subcategory_id
- title
- slug
- description
- featured_image
- pricing_type
- price
- button_text
- button_url
- display_order
- is_featured
- is_published
- seo_title
- seo_description
- created_at
- updated_at

Relationship

One Subcategory

↓

Many Service Items

---

# service_item_gallery

Stores multiple images for each service item.

Columns

- id
- service_item_id
- image_url
- caption
- display_order
- created_at

Relationship

One Service Item

↓

Many Images

---

# gallery_albums

Gallery organization.

Examples

Weddings

Corporate

Birthdays

Baby Shower

Columns

- id
- title
- slug
- cover_image
- display_order
- is_published
- created_at
- updated_at

---

# gallery_items

Stores gallery images.

Columns

- id
- album_id
- image_url
- caption
- display_order
- is_featured
- is_published
- created_at
- updated_at

Relationship

One Album

↓

Many Images

---

# faqs

Stores Frequently Asked Questions.

Columns

- id
- question
- answer
- display_order
- is_published
- created_at
- updated_at

---

# enquiries

Stores enquiries submitted from the website.

Columns

- id
- customer_name
- email
- phone
- event_date
- event_type
- venue
- selected_services
- message
- status
- created_at
- updated_at

Status

- New
- Contacted
- Quoted
- Closed

---

# enquiry_notes

Internal notes visible only to admins.

Columns

- id
- enquiry_id
- created_by
- note
- created_at

Relationship

One Enquiry

↓

Many Notes

---

# admin_profiles

Stores additional profile information for authenticated users.

Authentication is handled by Supabase Auth.

Columns

- id
- display_name
- avatar_url
- role
- is_active
- created_at
- updated_at

Roles

Owner

Staff

Developer

---

# media_library

Centralized media manager.

All uploaded files should pass through this table.

Columns

- id
- file_name
- file_url
- file_type
- file_size
- folder
- uploaded_by
- created_at

Purpose

Prevent duplicate uploads.

Reuse images across CMS pages.

---

# Relationships

service_categories

↓

service_subcategories

↓

service_items

↓

service_item_gallery

gallery_albums

↓

gallery_items

enquiries

↓

enquiry_notes

auth.users

↓

admin_profiles

---

# Indexes

Unique

- services.slug
- gallery_albums.slug

Indexes

- enquiries.status
- enquiries.created_at
- service_items.display_order
- gallery_items.display_order
- enquiry_notes.enquiry_id

---

# Media Storage

Images are stored in Supabase Storage.

Database tables only store URLs and metadata.

Binary files should never be stored directly inside PostgreSQL.

---

# Security

Row Level Security (RLS) is enabled on every table.

Public users may only read published content.

Public users may submit enquiries.

Authenticated administrators may:

- Create
- Edit
- Publish
- Hide
- Archive

Only Owner users may manage other users.

---

# Soft Delete Strategy

Content should never be permanently deleted by default.

Use

deleted_at

instead of hard delete.

Benefits

- Recover deleted content
- Prevent accidental deletion
- Maintain historical records

---

# Future Tables

These are intentionally excluded from Version 1.

- bookings
- booking_staff
- booking_calendar
- customers
- quotes
- invoices
- payments
- contracts
- package_builder
- inventory
- discount_codes
- crm_contacts
- notifications
- activity_logs

These tables will be introduced during future project phases.

---

# Checklist

- [x] Database architecture approved
- [ ] Create Supabase migrations
- [ ] Implement RLS policies
- [ ] Configure Storage Buckets
- [ ] Seed initial CMS data
- [ ] Test CRUD operations
- [ ] Validate relationships
- [ ] Test role-based permissions

---

# Related Documents

- ARCHITECTURE.md
- CMS.md
- API.md
- SECURITY.md
- ROADMAP.md
- FUTURE_UPGRADES.md
