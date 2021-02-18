using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TalentOnboarding.Models
{
    public partial class mvp_talent_dbContext : DbContext
    {
        public mvp_talent_dbContext()
        {
        }

        public mvp_talent_dbContext(DbContextOptions<mvp_talent_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }
        public virtual DbSet<Stores> Stores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=mvp-talent-svr.database.windows.net;Database=mvp_talent_db;User Id=bmiggi;Password=Contact24110");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customers>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("decimal(6, 2)");
            });

            modelBuilder.Entity<Sales>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Customerid).HasColumnName("customerid");

                entity.Property(e => e.Datesold)
                    .HasColumnName("datesold")
                    .HasColumnType("date");

                entity.Property(e => e.Productid).HasColumnName("productid");

                entity.Property(e => e.Storeid).HasColumnName("storeid");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Customerid)
                    .HasConstraintName("fk_customerid");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Productid)
                    .HasConstraintName("fk_productid");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Storeid)
                    .HasConstraintName("fk_storeid");
            });

            modelBuilder.Entity<Stores>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
