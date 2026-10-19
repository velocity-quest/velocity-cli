/** A failed parallel command must not leave another writer racing fixture removal. */
export class SmokeChildren {
  #active = new Map();
  track(child) {
    const closed = new Promise(resolve => child.once('close', () => { this.#active.delete(child); resolve(); }));
    this.#active.set(child, closed);
  }
  async stop() {
    const active = [...this.#active];
    for (const [child] of active) child.kill();
    const deadline = setTimeout(() => { for (const [child] of active) if (this.#active.has(child)) child.kill('SIGKILL'); }, 5000);
    try { await Promise.all(active.map(([, closed]) => closed)); }
    finally { clearTimeout(deadline); }
  }
}
