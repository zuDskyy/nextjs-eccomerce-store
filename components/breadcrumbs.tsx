import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadCrumb } from "@/types";
import { ChevronRight } from "lucide-react";

export function BreadcrumbCollapsed({ crumbs }: { crumbs: BreadCrumb[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex flex-wrap gap-2">
        {crumbs.map((crumb, index) => (
          <div
            key={crumb.href}
            className="flex items-center space-x-2 text-sm font-medium text-neutral-600 hover:text-black transition"
          >
            <BreadcrumbItem>
              {index === crumbs.length - 1 ? (
                <BreadcrumbPage className="text-black font-semibold">
                  {crumb.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={crumb.href as string}
                    className="hover:text-black transition"
                  >
                    {crumb.label}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {index !== crumbs.length - 1 && (
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </BreadcrumbSeparator>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
