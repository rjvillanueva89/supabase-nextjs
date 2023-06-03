ALTER TABLE "products" RENAME COLUMN "created_by" TO "create_by";
ALTER TABLE "products" ALTER COLUMN "create_by" SET DATA TYPE uuid;
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_create_by_profiles_id_fk" FOREIGN KEY ("create_by") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
