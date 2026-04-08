import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-4 sm:px-8 text-center text-sm text-muted-foreground">
        <p className="mb-2">
          Federated Multi-Task Learning for Privacy-Preserving Personalized Diabetes Prediction
        </p>
        <p>
          &copy; {new Date().getFullYear()} MTFL Research Group. Built for final year research evaluation.
        </p>
      </div>
    </footer>
  )
}
