CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid DEFAULT get_random_uuid(),
	"name" text NOT NULL,
	"description" text,
	"created_by" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "profiles" (
	"id" uuid DEFAULT get_random_uuid(),
	"full_name" text NOT NULL,
	"username" text NOT NULL,
	"avatar_url" text,
	"updated_at" timestamp DEFAULT now()
);
