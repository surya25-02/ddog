export default class Ddog {

    monitor = "https://api.datadoghq.eu/api/v1/monitor"; 
    metrics = "https://api.datadoghq.eu/api/v2/metrics";

    constructor(api_key, app_key) {
        this.api_key = api_key;
        this.app_key = app_key;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'DD-API-KEY': this.api_key,
            'DD-APPLICATION-KEY': this.app_key,
        };
    }

    async create_monitor(body) {
        const res = await fetch(this.monitor, {
            headers: this.headers,
            method: 'POST',
            body: JSON.stringify(body)
        })

        return await res.json()
    }

    async get_monitor_list() {
        const res = await fetch(this.monitor, {
            headers: this.headers,
        })

        return await res.json()
    }

    async get_metric_list() {
        const res = await fetch(this.metrics, {
            headers: this.headers,
        })

        return await res.json()
    }
}