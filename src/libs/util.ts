export function sleep(delay: number = 3000): Promise<void>
{
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function initCustomEvent(): void {
  const events: any = {
    on(event, cb, opts)
    {
      if (!this.namespaces) this.namespaces = {};
      this.namespaces[event] = cb;
      const options = opts || false;
      this.addEventListener(event.split('.')[0], cb, options);
      return this;
    },
    off(event)
    {
      if (!(this.namespaces && this.namespaces[event])) return;
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    },
  };
  (window as any).on = (document as any).on = (Element.prototype as any).on = events.on;
  (window as any).off = (document as any).off = (Element.prototype as any).off = events.off;
}
